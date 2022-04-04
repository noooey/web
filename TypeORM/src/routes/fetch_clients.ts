import express from 'express';
import { Client } from '../entities/Client';
import { createQueryBuilder } from 'typeorm';

const router = express.Router();

router.get('/api/clients', async (req, res) => {
    const client = await createQueryBuilder(
        'client'
    )
    .select('client.first_name')
    .addSelect('client.balance')
    .from(Client, 'client')
    .where('client.balance >= :minBalance AND client.balance <= :maxBalance', {minBalance: -100, maxBalance: 1000})
    .getMany()

    return res.json(client);
})

export {
    router as fetchClientRouter
}