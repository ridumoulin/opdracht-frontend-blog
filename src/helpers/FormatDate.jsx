export function formatDate(inputDate) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(inputDate).toLocaleDateString('nl-NL', options);
}