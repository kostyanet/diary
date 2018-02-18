import {action, extendObservable, toJS} from 'mobx';

import {fakeItems, getRandomString}     from './helpers';
import StorageService                   from '../services/storage.service';



class MainStore {
    constructor(StorageService) {
        this.StorageService = StorageService;

        extendObservable(this, {
            activeIndex: null,
            items: StorageService.get() || fakeItems,
        });
    }


    addComment = action(message => {
        this.items[this.activeIndex].comments.push({
            message,
            id:         getRandomString(),
        });

        this.StorageService.set(toJS(this.items));
    });


    createItem = action(title => {
        this.items.push({
            id:         getRandomString(),
            title:      title.substr(0, 33),
            comments:   []
        });

        this.StorageService.set(toJS(this.items));
    });


    removeItem = action(index => {
        if (index === this.activeIndex) this.activeIndex = null;

        this.items.splice(index, 1);
        this.StorageService.set(toJS(this.items));
    });


    setItemActive = action(index => this.activeIndex = index)

}



const mainStore = new MainStore(StorageService);
export default mainStore;

