export interface Post {
    id: number;
    title: string;
    content: string;
    created: string;
    images: Img[];
    isEditing: boolean; 
}

export interface Img {
    id: number;
    link: string;
    created: string;
}
  