import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogs = props.state.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.state.dialogPage.messages.map(message => <Message message={message.message} />);

    let newMessageBody = props.state.dialogPage.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogs}
                </div>
                <div className={classes.messages}>
                    <div>{messages}</div>
                    <div>
                        <textarea  value={newMessageBody} onChange={onNewMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;