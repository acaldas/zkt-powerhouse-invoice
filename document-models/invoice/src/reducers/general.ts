/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { InputMaybe } from 'document-models/invoice/gen';
import { InvoiceGeneralOperations } from '../../gen/general/operations';
import { notNullUndefined } from '../utils';

export const reducer: InvoiceGeneralOperations = {
    editInvoiceOperation(state, action, dispatch) {
        try {
            const newState = { ...state };
            newState.currency =
                notNullUndefined(action.input.currency) || state.currency;
            newState.dateDelivered =
                notNullUndefined(action.input.dateDelivered) ||
                state.dateDelivered;
            newState.dateDue =
                notNullUndefined(action.input.dateDue) || state.dateDue;
            newState.dateIssued =
                notNullUndefined(action.input.dateIssued) || state.dateIssued;
            newState.invoiceNo =
                notNullUndefined(action.input.invoiceNo) || state.invoiceNo;
            newState.title =
                notNullUndefined(action.input.title) || state.title;
        } catch (e) {
            console.error(e);
        }
    },
    editStatusOperation(state, action, dispatch) {
        try {
            state.status = action.input.status;
        } catch (e) {
            console.error(e);
        }
    },
    addRefOperation(state, action, dispatch) {
        try {
            if (!action.input.id) throw new Error('No input.id');
            if (!action.input.value) throw new Error('No input.value');
            if (state.refs.find((r) => r.id == action.input.id))
                throw new Error('Ref already exists with provided input.id');
            state.refs.push(action.input);
        } catch (e) {
            console.error(e);
        }
    },
    editRefOperation(state, action, dispatch) {
        try {
            if (!action.input.id) throw new Error('No input.id');
            if (!action.input.value) throw new Error('No input.value');

            let ref = state.refs.find((r) => r.id == action.input.id);
            if (!ref) throw new Error('Ref not found with provided input.id');
            ref = action.input;
        } catch (e) {
            console.error(e);
        }
    },
    deleteRefOperation(state, action, dispatch) {
        try {
            if (!action.input.id) throw new Error('No input.id');
            state.refs = state.refs.filter((r) => r.id !== action.input.id);
        } catch (e) {
            console.error(e);
        }
    },
};