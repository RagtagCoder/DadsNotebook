import { PageVisit } from "../models/page-visit";

export async function CreatePageVisitRequest(sourcePage: string): Promise<PageVisit> {

    const ip = await getIpAddress();

    const pageVisit = {
        page: sourcePage,
        site: 'DadsNotebook',
        ipAddress: ip,
        date: new Date()
    } as PageVisit;

    return pageVisit;
}

export async function getIpAddress() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
}