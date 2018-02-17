import {action, extendObservable, toJS} from 'mobx';
import {fakeItems, getRandomString}     from './helpers';


class MainStore {
    constructor() {
        extendObservable(this, {
            activeIndex: null,
            items: StorageService.get() || fakeItems,
        });
    }

    createItem = action(title => {
        this.items.push({
            id:         getRandomString(),
            title,
            comments:   []
        });

        StorageService.set(toJS(this.items));
    });

    setItemActive = action(index => this.activeIndex = index)

}


class StorageService {
    static get() {
        return JSON.parse(window.localStorage.getItem('items'));
    }


    static set(data = null) {
        window.localStorage.setItem('items', JSON.stringify(data));
    }
}


const mainStore = new MainStore();
export default mainStore;

