import { toast } from "react-toastify";



    const getStoredMarkList = () => {
        const storedListSrt = localStorage.getItem('read-list');
        if(storedListSrt){
            const storedList = JSON.parse(storedListSrt);
            return storedList;
        }
        else{
            return [];
        }
    }


    const addToStoredReadList = (id) => {
        const storedList = getStoredMarkList();
        if(storedList.includes(id)){
            console.log(id, 'Item already on the list')
        }
        else{
            storedList.push(id);
            const storedListSrt = JSON.stringify(storedList);
            localStorage.setItem('read-list',storedListSrt)
            toast('This book is added on your read lis')
        }
    }


    const getStoredWishList = () => {
        const storedWishListSrt = localStorage.getItem('wish-list')
        if(storedWishListSrt) {
            const storedWishList = JSON.parse(storedWishListSrt)
            return storedWishList;
        }
        else{
            return [];
        }
    }

    const addToStoredWishList = (id) => {
        const storedWishList = getStoredWishList()
        if(storedWishList.includes(id)){
            console.log(id, 'store item already added')
        }
        else{
            storedWishList.push(id)
            const storedWisgListSrt = JSON.stringify(storedWishList)
            localStorage.setItem('wish-list', storedWisgListSrt)
        }
    }






    export {addToStoredReadList,addToStoredWishList,getStoredMarkList};

