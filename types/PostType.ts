export type PostType = {
    id: number;
    title: string;
    body: string;
};

type CommentType = {
    id: number;
    postId: number;
    body: string;
};
export type PostRetrieveType = {
    id: number;
    title: string;
    body: string;
    comments: CommentType[];
};
