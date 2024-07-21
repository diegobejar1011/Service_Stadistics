import { Format } from "../graphic/domain/entities";

export const getOne = (documents: Format[], today: Date) => {

    let closeDate: Date | null = null;
    let closeDoc: any = null;

    for (let i = 0; i < documents.length; i++) {
        
        const currentDate = new Date(documents[i].date);

        if (closeDate === null || currentDate < closeDate) {
            closeDate = currentDate;
            closeDoc = documents[i];
        }
    }

    return closeDoc;
}
