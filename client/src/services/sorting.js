export const sortArray = (arr, key) => {
    return arr.sort((a,b) => {
        if (arr[0][key] > arr[arr.length - 1][key]) {
            return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;  
        }
        else {
            return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
        }
    });
}