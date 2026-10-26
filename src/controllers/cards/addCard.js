import { cards } from "../../store/cards.store.js";


export const addCard = (req, res) => {
    const {
        name, cost, type, print, rulesText,
        flavorText, power, toughness
    } = req.body;

    cards.push({
        name, cost, type, print, rulesText,
        flavorText, power, toughness
    })

    return res.status(201).json({ 
        message: "Card created successfully!"
    })
}