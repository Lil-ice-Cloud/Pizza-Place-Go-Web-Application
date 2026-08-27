/**
 * THE MENU LIVES HERE — and only here.
 *
 * No prices and no item names anywhere in the components.
 * To change a price you edit one number in this file and nothing else.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * PRICES ARE NUMBERS, NEVER STRINGS
 * ─────────────────────────────────────────────────────────────────────────
 *   700          ✅  can be summed, sorted, discounted, put in a cart
 *   "Rs. 700"    ❌  dead text
 *
 *   null         →  price not shown on the menu (blacked out / seasonal).
 *                   Renders as "Ask price" instead of a fake 0.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * TWO WAYS TO WRITE A SECTION
 * ─────────────────────────────────────────────────────────────────────────
 *
 * 1. Write the section out directly (Soup, Sawan, Dessert, Fresh Juice…).
 *
 * 2. Write a PriceTable when several sections share the same item list and
 *    differ only in price — the six kottu sections repeat the exact same ten
 *    toppings. One `rows` list plus one `prices` table becomes six sections,
 *    so a new topping is added in one place instead of six.
 *
 * Either way the page receives plain sections and renders them the same.
 */

export type ItemTag = "spicy" | "veg" | "seafood" | "popular";

export type Variant = {
    /** "Medium", "Large", "Small", "Normal", "Full", "Person 4"… */
    label: string;
    /** LKR. `null` = price not published — shown as "Ask price". */
    price: number | null;
};

export type MenuItem = {
    id: string;
    name: string;
    description?: string;
    variants: Variant[];
    tags?: ItemTag[];
};

export type MenuCategory = {
    id: string;
    name: string;
    /** Small line under the section heading, e.g. "Served with salad". */
    note?: string;
    items: MenuItem[];
};

/** Top-level bands on the page. Keep each to a handful of sections. */
export type MenuGroup = {
    id: string;
    name: string;
    categories: MenuCategory[];
};

/* ── PriceTable: several sections, one item list ───────────────────────── */

type PriceTable = {
    /** Prefix for generated ids: "kottu" → "kottu-noodles-chicken". */
    idPrefix: string;
    /** One section per entry, rendered top to bottom in this order. */
    sections: { id: string; name: string; note?: string }[];
    /** Appended to every row name: "Vegetable" + "Kottu" = "Vegetable Kottu". */
    itemSuffix?: string;
    /** The price columns on the printed menu. */
    sizes: string[];
    rows: { id: string; name: string; tags?: ItemTag[] }[];
    /** prices[sectionId][rowId] = [priceForSize0, priceForSize1, …] */
    prices: Record<string, Record<string, (number | null)[]>>;
};

/**
 * A row with no entry under a section is skipped, so sections that carry
 * different subsets of the row list (Pizza: Classic vs Lovers vs Supreme)
 * work without any extra plumbing.
 */
function expandTable(t: PriceTable): MenuCategory[] {
    return t.sections.map((section) => ({
        id: `${t.idPrefix}-${section.id}`,
        name: section.name,
        note: section.note,
        items: t.rows
            .filter((row) => t.prices[section.id]?.[row.id])
            .map((row) => ({
                id: `${t.idPrefix}-${section.id}-${row.id}`,
                name: t.itemSuffix ? `${row.name} ${t.itemSuffix}` : row.name,
                tags: row.tags,
                variants: t.sizes.map((label, i) => ({
                    label,
                    price: t.prices[section.id][row.id][i] ?? null,
                })),
            })),
    }));
}

/* ═══════════════════════════════════════════════════════════════════════
   KOTTU — six sections, one shared topping list
   ═══════════════════════════════════════════════════════════════════════ */

const kottuTable: PriceTable = {
    idPrefix: "kottu",
    itemSuffix: "Kottu",
    sizes: ["Medium", "Large"],
    sections: [
        { id: "plain", name: "Kottu" },
        { id: "noodles", name: "Noodles Kottu" },
        { id: "rice", name: "Rice Kottu" },
        { id: "cheese", name: "Cheese Kottu" },
        { id: "pasta", name: "Pasta Kottu" },
        { id: "masala", name: "Masala Kottu" },
    ],
    rows: [
        { id: "vegetable", name: "Vegetable", tags: ["veg"] },
        { id: "egg", name: "Egg" },
        { id: "chicken", name: "Chicken" },
        { id: "fish", name: "Fish", tags: ["seafood"] },
        { id: "beef", name: "Beef" },
        { id: "pork", name: "Pork" },
        { id: "prawns", name: "Prawns", tags: ["seafood"] },
        { id: "cuttlefish", name: "Cuttlefish", tags: ["seafood"] },
        { id: "seafood", name: "Seafood", tags: ["seafood"] },
        { id: "mixed", name: "Mixed", tags: ["popular"] },
    ],
    prices: {
        plain: {
            vegetable: [700, 900],
            egg: [850, 1000],
            chicken: [900, 1150],
            fish: [1000, 1200],
            beef: [1150, 1350],
            pork: [1200, 1400],
            prawns: [1150, 1400],
            cuttlefish: [1100, 1350],
            seafood: [1650, 1900],
            mixed: [1750, 2000],
        },
        noodles: {
            vegetable: [800, 950],
            egg: [950, 1150],
            chicken: [1000, 1300],
            fish: [1050, 1300],
            beef: [1200, 1400],
            pork: [1250, 1500],
            prawns: [1200, 1400],
            cuttlefish: [1100, 1350],
            seafood: [1750, 2000],
            mixed: [1850, 2100],
        },
        rice: {
            vegetable: [850, 1050],
            egg: [1000, 1200],
            chicken: [1050, 1300],
            fish: [1100, 1350],
            beef: [1200, 1450],
            pork: [1250, 1550],
            prawns: [1150, 1450],
            cuttlefish: [1100, 1350],
            seafood: [1750, 1950],
            mixed: [1850, 2050],
        },
        cheese: {
            vegetable: [1150, 1350],
            egg: [1300, 1400],
            chicken: [1400, 1600],
            fish: [1450, 1650],
            beef: [1500, 1700],
            pork: [1550, 1750],
            prawns: [1500, 1700],
            cuttlefish: [1400, 1600],
            seafood: [1950, 2150],
            mixed: [2000, 2250],
        },
        pasta: {
            vegetable: [800, 1000],
            egg: [950, 1150],
            chicken: [1000, 1250],
            fish: [1050, 1300],
            beef: [1200, 1450],
            pork: [1250, 1550],
            prawns: [1150, 1400],
            cuttlefish: [1100, 1350],
            seafood: [1750, 2000],
            mixed: [1850, 2100],
        },
        masala: {
            vegetable: [800, 950],
            egg: [950, 1150],
            chicken: [1050, 1200],
            fish: [1100, 1350],
            beef: [1200, 1400],
            pork: [1300, 1500],
            prawns: [1200, 1350],
            cuttlefish: [1150, 1350],
            seafood: [1950, 2150],
            mixed: [2050, 2250],
        },
    },
};

const killoKottu: MenuCategory = {
    id: "killo-kottu",
    name: "Killo Kottu",
    items: [
        { id: "kk-chicken", name: "Chicken Kottu", variants: [{ label: "1 Kg", price: 3500 }] },
        { id: "kk-noodles", name: "Noodles Kottu", variants: [{ label: "1 Kg", price: 3800 }] },
        { id: "kk-rice", name: "Rice Kottu", variants: [{ label: "1 Kg", price: 3800 }] },
        { id: "kk-cheese", name: "Cheese Kottu", variants: [{ label: "1 Kg", price: 5000 }] },
        { id: "kk-masala", name: "Masala Kottu", variants: [{ label: "1 Kg", price: 3800 }] },
    ],
};

const sawan: MenuCategory = {
    id: "sawan",
    name: "Sawan",
    note: "Sharing platters — pick the size by head count.",
    items: [
        { id: "sw-rice", name: "Rice Sawan", variants: [{ label: "Person 4", price: 3000 }, { label: "Person 6", price: 4500 }] },
        { id: "sw-kottu", name: "Kottu Sawan", variants: [{ label: "Person 4", price: 3500 }, { label: "Person 6", price: 5000 }] },
        { id: "sw-chopsuey", name: "Chopsuey Sawan", variants: [{ label: "Person 4", price: 6000 }, { label: "Person 6", price: 8000 }] },
        { id: "sw-biriyani", name: "Biriyani Sawan", variants: [{ label: "Person 4", price: 3000 }, { label: "Person 6", price: 4500 }] },
        { id: "sw-nasi", name: "Nasi Sawan", variants: [{ label: "Person 4", price: 5000 }, { label: "Person 6", price: 7000 }] },
    ],
};

const soup: MenuCategory = {
    id: "soup",
    name: "Soup",
    items: [
        { id: "sp-chicken-corn", name: "Chicken and Sweet Corn", variants: [{ label: "Bowl", price: 500 }] },
        { id: "sp-veg", name: "Vegetable Soup", variants: [{ label: "Bowl", price: 400 }], tags: ["veg"] },
        { id: "sp-seafood", name: "Seafood Soup", variants: [{ label: "Bowl", price: 850 }], tags: ["seafood"] },
    ],
};

const dessert: MenuCategory = {
    id: "dessert",
    name: "Dessert",
    items: [
        { id: "ds-fruit-salad", name: "Fruit Salad", variants: [{ label: "Portion", price: 500 }] },
        { id: "ds-ice-cream", name: "Ice Cream", description: "Vanilla, Chocolate or Strawberry", variants: [{ label: "Portion", price: 500 }] },
        { id: "ds-watalappan", name: "Watalappan", variants: [{ label: "Portion", price: 300 }], tags: ["popular"] },
    ],
};

const freshJuice: MenuCategory = {
    id: "fresh-juice",
    name: "Fresh Juice",
    note: "Seasonal fruits are priced on the day — ask the counter.",
    items: [
        { id: "fj-papaya", name: "Papaya", variants: [{ label: "Glass", price: 450 }] },
        { id: "fj-avocado", name: "Avocado", variants: [{ label: "Glass", price: 450 }] },
        // Blacked out on the printed menu → null, renders as "Ask price".
        { id: "fj-woodapple", name: "Woodapple", variants: [{ label: "Glass", price: null }] },
        { id: "fj-mango", name: "Mango", variants: [{ label: "Glass", price: 450 }] },
        { id: "fj-pineapple", name: "Pineapple", variants: [{ label: "Glass", price: 450 }] },
        { id: "fj-watermelon", name: "Watermelon", variants: [{ label: "Glass", price: 450 }] },
        { id: "fj-lime", name: "Lime", variants: [{ label: "Glass", price: 400 }] },
        { id: "fj-apple", name: "Apple", variants: [{ label: "Glass", price: 450 }] },
        { id: "fj-soursop", name: "Soursop", variants: [{ label: "Glass", price: null }] },
        { id: "fj-grapes", name: "Grapes", variants: [{ label: "Glass", price: null }] },
        { id: "fj-pomegranate", name: "Pomegranate", variants: [{ label: "Glass", price: null }] },
        { id: "fj-mix", name: "Mix Fruit", variants: [{ label: "Glass", price: 500 }] },
    ],
};

/* ═══════════════════════════════════════════════════════════════════════
   TODO — fill these in from the other menu photos.
   Delete a placeholder and paste real items; the page picks them up with
   no other change. Keep ids unique and lowercase-with-dashes.
   ═══════════════════════════════════════════════════════════════════════ */

/**
 * PIZZA — three tiers, each with its own set of pizzas, all priced
 * Small / Medium / Large. Same table trick: list every pizza once in `rows`,
 * then give it a price only under the tiers that serve it.
 */
const pizzaTable: PriceTable = {
    idPrefix: "pizza",
    sizes: ["Small", "Medium", "Large"],
    sections: [
        { id: "classic", name: "Pizza · Classic" },
        { id: "lovers", name: "Pizza · Lovers" },
        { id: "supreme", name: "Pizza · Supreme" },
    ],
    rows: [
        // TODO: one entry per pizza across all three tiers.
        { id: "cheese-tomato", name: "Cheese & Tomato", tags: ["veg"] },
        { id: "cheese-onion", name: "Cheese Onion", tags: ["veg"] },
        { id: "super-supreme", name: "Super Supreme" },
    ],
    prices: {
        classic: {
            "cheese-tomato": [1000, 1950, 3550],
            "cheese-onion": [1000, 1950, 3550],
            // "super-supreme" absent here → the row is skipped under Classic.
        },
        lovers: {
            // TODO
        },
        supreme: {
            "super-supreme": [1940, 3280, 4850],
        },
    },
};

/**
 * RICE — the printed menu prices every dish four ways: Kiri Samba and
 * Basmathi, each Normal and Full. Four numeric columns plus a dish name does
 * not fit on a phone, so the rice type becomes the section and only the two
 * portion columns stay — the same split the printed menu already uses in its
 * column headers. Each dish is still written once.
 */
const riceTable: PriceTable = {
    idPrefix: "rice",
    sizes: ["Normal", "Full"],
    sections: [
        { id: "kiri-samba", name: "Rice · Kiri Samba" },
        { id: "basmathi", name: "Rice · Basmathi" },
    ],
    rows: [
        // Dish names read off the menu board. Add a price below and the dish
        // appears; a dish with no price under a section is skipped there.
        { id: "set-menu", name: "Fried Rice Set Menu" },
        { id: "chicken-mix", name: "Fried Rice Chicken Mix" },
        { id: "egg", name: "Egg Fried Rice" },
        { id: "vegetable", name: "Vegetable Fried Rice", tags: ["veg"] },
        { id: "seafood", name: "Seafood Rice", tags: ["seafood"] },
        { id: "fish", name: "Fish Fried Rice", tags: ["seafood"] },
        { id: "pork", name: "Pork Rice" },
        { id: "beef", name: "Beef Rice" },
        { id: "mongolian", name: "Mongolian Rice" },
        { id: "nasi-goreng", name: "Nasi Goreng" },
        { id: "chopsuey", name: "Chopsuey Rice" },
        { id: "biriyani", name: "Biriyani" },
        { id: "mixed", name: "Mixed Fried Rice" },
    ],
    prices: {
        "kiri-samba": {
            "set-menu": [850, 1100],
            // TODO: the rest — [normal, full]
        },
        basmathi: {
            "set-menu": [1000, 1300],
            // TODO
        },
    },
};

/** DEVILLED · APPETIZER · STEW · NOODLES · PASTA · MILKSHAKE — TODO */
const devilled: MenuCategory = {
    id: "devilled",
    name: "Devilled",
    items: [
        { id: "dv-chicken-fried", name: "Chicken Fried", variants: [{ label: "Portion", price: 1500 }] },
        // TODO: Chicken Devilled, Fish Fried, Fish Devilled, Sausage Devilled,
        // Prawns Devilled, Cuttlefish Devilled, Cheese Omelette, Beef, Pork…
    ],
};

/* ═══════════════════════════════════════════════════════════════════════
   THE MENU — order here is the order on the page and in the sticky rail
   ═══════════════════════════════════════════════════════════════════════ */

export const menu: MenuGroup[] = [
    {
        id: "kottu-group",
        name: "Kottu",
        categories: [...expandTable(kottuTable), killoKottu],
    },
    {
        id: "mains",
        name: "Mains",
        categories: [...expandTable(riceTable), ...expandTable(pizzaTable), devilled, sawan],
    },
    {
        id: "sides",
        name: "Sides",
        categories: [soup],
    },
    {
        id: "drinks",
        name: "Drinks & Dessert",
        categories: [dessert, freshJuice],
    },
];

/** Shown at the bottom of the menu page. Straight off the printed menu. */
export const menuFootnotes = [
    "10% service charge applies on dine-in orders.",
    "Prices are in Sri Lankan Rupees and include all taxes unless stated.",
];

/* ── helpers ───────────────────────────────────────────────────────────── */

/**
 * Formats without `toLocaleString`, on purpose: locale data can differ
 * between the Node server and the browser, and that is a hydration mismatch
 * waiting to happen. This is deterministic everywhere.
 */
export function formatLkr(price: number | null): string {
    if (price === null) return "Ask price";
    return `Rs. ${formatNumber(price)}`;
}

/** Grouped digits with no currency prefix — for column layouts where the
 *  heading already says the prices are in rupees. */
export function formatNumber(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** Cheapest published price in a section — handy for a "from Rs. X" badge. */
export function categoryFromPrice(cat: MenuCategory): number | null {
    const prices = cat.items
        .flatMap((i) => i.variants.map((v) => v.price))
        .filter((p): p is number => p !== null);
    return prices.length ? Math.min(...prices) : null;
}
