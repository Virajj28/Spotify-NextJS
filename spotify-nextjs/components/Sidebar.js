import {
    HomeIcon,SearchIcon,LibraryIcon
} from '@heroicons/react/outline';

function Sidebar() {
    return (
        <div>
            <button className="flex items-center">
                <HomeIcon className="h-4 w-4" />
                <p>Home</p>
            </button> 
            <button className="flex items-center">
                <SearchIcon className="h-4 w-4" />
                <p>Search</p>
            </button> 
            <button className="flex items-center">
                <LibraryIcon className="h-4 w-4" />
                <p>Home</p>
            </button> 
        </div>
    )
}

export default Sidebar
