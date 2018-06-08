export function saveState(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
}

export function getSavedState(key) {
    const savedState = sessionStorage.getItem(key);

    return savedState ? JSON.parse(savedState) : null;
}

export function clearSavedState(key) {
    sessionStorage.removeItem(key);
}
