export const strSort = (str1, str2, asc = true) => {
    return (
        asc 
        ?
        str1.localeCompare(str2)
        :
        str2.localeCompare(str1)
    );
} 