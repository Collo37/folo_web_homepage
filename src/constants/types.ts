export interface SalesPackage {
    discount: Number,
    noOfFollowers: Number,
    price: Number,
    details: String[],
    featured: Boolean
};

export interface Tutorial {
    image: string,
    title: String,
    description: String
    width: number,
    height: number
};

export interface Feature {
    image: string,
    featureName: string,
    description: string
};

export interface Faq {
    question: string,
    answer: string
};

export interface Review {
    review: string,
    clientName: string
}

export interface FooterItem {
    title: string,
    links: string[]
}