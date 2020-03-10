import { ContextProvider } from 'recyclerlistview/web';
import { window } from 'browser-monads';

export default class ContextHelper extends ContextProvider {
    constructor(uniqueKey) {
        super();
        this._uniqueKey = uniqueKey;
    }

    getUniqueKey() {
        return this._uniqueKey;
    }

    save(key, value) {
        window.localStorage.setItem(key, value);
    }

    get(key) {
        const value = parseInt(window.localStorage.getItem(key));
        if (isNaN(value)) {
            return 0;
        }
        return value;
    }

    remove(key) {
        window.localStorage.removeItem(`scroll_context_${key}`);
    }
}
