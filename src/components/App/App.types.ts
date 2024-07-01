export interface Image {
    description: string | null;
    urls: {
        regular: string;
        small: string;
    }
    id: string;
}

export interface Data {
    total: number;
    total_pages: number;
    results: Image[];
}