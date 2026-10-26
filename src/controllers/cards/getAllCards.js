import { cards } from "../../store/cards.store.js"


export const getAllCards = (req, res) => {
    res.status(200).json({
        message: "Dette gikk bra",
        data: cards
    })
}