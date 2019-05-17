import ImageUploader from "./layouts/mainPage";
import TagImages from "./components/tagImages";
import FinalPage from "./layouts/finalPage";

var indexRoutes = [
    {
        path: "/uploadwithtags",
        name: "TagImages",
        icon: "nc-icon nc-bank",
        component: TagImages
    },
    {
        path: "/thankyou",
        name: "FinalPage",
        icon: "nc-icon nc-bank",
        component: FinalPage
    },
    {
        path: "/",
        name: "ImageUploader",
        icon: "nc-icon nc-bank",
        component: ImageUploader
    }];

export default indexRoutes;