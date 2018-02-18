export default class StorageService {
    static get() {
        return JSON.parse(window.localStorage.getItem('items'));
    }


    static set(data = null) {
        window.localStorage.setItem('items', JSON.stringify(data));
    }
}
