import Knex from 'knex';


export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e baterias', image: 'baterias.svg' },
        { title: 'papéis e papelão', image: 'papeis-papelão.svg' },
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'lampadas.svg' },
        { title: 'Ôleo de Cozinha', image: 'oleo.svg' },
    ]);
}