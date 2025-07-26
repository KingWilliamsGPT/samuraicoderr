export interface Testimonial {
    id?: number;
    name: string;
    handle: string;
    avatar: string;
    linkedinUrl: string;
    content: string;
    time?: string;
    likes?: string;
    retweets?: string;
    comments?: string;
    verified?: boolean;
    platform?: string;
}