export type Category = {
    [tag: string]:{ // dinamyc name object
        title: string;
        color: string;
        expense: boolean;
    }
};