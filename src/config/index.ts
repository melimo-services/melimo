// icons
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';


// components
import Home from '../pages/Home';
import Contact from '../pages/Contact';





// interface
import RouteItem from '../model/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
    {
        key: "router-home",
        title: "Accueil",
        tooltip: "Home",
        path: "/melimo",
        enabled: true,
        component: Home,
        icon: HomeIcon,
        appendDivider: true
    },
    {
        key: "router-contact",
        title: "Contact",
        tooltip: "contact",
        path: "/contact",
        enabled: true,
        component: Contact,
        icon: PermContactCalendarIcon,
        appendDivider: true
    },
]