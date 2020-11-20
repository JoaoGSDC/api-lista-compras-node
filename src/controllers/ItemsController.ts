import { Request, Response } from 'express';
import knex from '../database/connection';

export const index = async (req: Request, res: Response) => {
    const items = await knex('Items').select('*');

    return res.json(items);
}

export const insert = async (req: Request, res: Response) => {
    const { item } = req.body;

    await knex('Items').insert({ item });

    const items = await knex('Items').select('*');

    return res.json(items);
}

export const update = async (req: Request, res: Response) => {
    const { id, item } = req.body;

    await knex('Items').where('id', '=', id).update({ item: item });

    const items = await knex('Items').select('*');

    return res.json(items);
}

export const delet = async (req: Request, res: Response) => {
    const { id } = req.headers;

    await knex('Items').where('id', id).delete();

    const items = await knex('Items').select('*');

    return res.json(items);
}

export default { index, insert, update, delet }