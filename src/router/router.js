import Home from '../components/home/Home';
import ReturnCoin from '../components/returncoin/ReturnCoin';
import User from '../components/user/User';
import BorrowRecord from '../components/returncoin/BorrowRecord';

export default [
    {
        path: "/",
        component: Home,
        exact:true
    },
    {
        path: "/returncoin",
        component: ReturnCoin
    },
    {
        path: "/user",
        component: User
    },
    {
        path: "/borrowrecord",
        component: BorrowRecord
    }
]