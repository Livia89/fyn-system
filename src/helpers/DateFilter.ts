import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() +1}`;
}

export const filterListByMonth = (list: Item[], date:string): Item[] => {
    let [year, mounth] = date.split('-');
    const newList:Item[] = list.filter((item : Item) => item.date.getFullYear() === parseInt(year) && item.date.getMonth() === parseInt(mounth))
    return newList;
}; 

export const formatDate = (date : Date) : string=> {
    return`${addZeroToDate(date.getDate())}/${addZeroToDate(date.getMonth())}/${date.getFullYear()}`;
}

const addZeroToDate = (n: number) : string=> n < 10 ? `0${n}`: `${n}`;

export const formaCurrentMonth = (currencyMonth:string) : string => {
    let [year, month] = currencyMonth.split('-');
    let months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

    return `${months[parseInt(month)-1]} - ${year}`;
}