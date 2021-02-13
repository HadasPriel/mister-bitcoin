import { Timestamp } from "rxjs/internal/operators/timestamp";
import { Contact } from "./contact.model";

export class Move {

    constructor(public time: Timestamp<any> = null, public contact: Contact = null, public amount: number = null) {

    }

}