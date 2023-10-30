import { Contact } from "../contact/contact"
import './contacts.scss'

const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <Contact name='Email' />
            <Contact name='Whatsapp' />
            <Contact name='Linkedin' />
            <Contact name='GitHub' />
            <Contact name='Instagram' />
        </section>
    )
}   

export { Contacts }