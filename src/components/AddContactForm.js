import React, { useState } from "react";

const AddContactForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({
    nome: "",
    cognome: "",
    azienda: "",
    pi_cf: "",
    telefono: "",
    email: "",
    indirizzo: "",
    provincia: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(contact);
    setContact({
      nome: "",
      cognome: "",
      azienda: "",
      pi_cf: "",
      telefono: "",
      email: "",
      indirizzo: "",
      provincia: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:{" "}
        <input
          type="text"
          value={contact.nome}
          onChange={(e) => setContact({ ...contact, nome: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Cognome:{" "}
        <input
          type="text"
          value={contact.cognome}
          onChange={(e) => setContact({ ...contact, cognome: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Azienda:{" "}
        <input
          type="text"
          value={contact.azienda}
          onChange={(e) => setContact({ ...contact, azienda: e.target.value })}
        />
      </label>
      <br />
      <label>
        P.I./C.F.:{" "}
        <input
          type="text"
          value={contact.pi_cf}
          onChange={(e) => setContact({ ...contact, pi_cf: e.target.value })}
        />
      </label>
      <br />
      <label>
        Telefono:{" "}
        <input
          type="tel"
          value={contact.telefono}
          onChange={(e) => setContact({ ...contact, telefono: e.target.value })}
        />
      </label>
      <br />
      <label>
        Email:{" "}
        <input
          type="email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Indirizzo:{" "}
        <input
          type="text"
          value={contact.indirizzo}
          onChange={(e) => setContact({ ...contact, indirizzo: e.target.value })}
        />
      </label>
      <br />
      <label>
        Provincia:{" "}
        <input
          type="text"
          value={contact.provincia}
          onChange={(e) => setContact({ ...contact, provincia: e.target.value })}
        />
      </label>
      <br />
      <button type="submit">Aggiungi Contatto</button>
    </form>
  );
};

export default AddContactForm;
