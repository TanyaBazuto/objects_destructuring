export default function availableAttacks( { special } = {} ) {
    const attacks = special.map(( { id, name, icon, description = 'Описание недоступно' } ) => (
        { id, name, icon, description }
    ));
    return attacks;
}