import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editFaqId, setEditFaqId] = useState(null); // For editing a FAQ
  const [editFaqData, setEditFaqData] = useState({ question: '', answer: '' });

  // Fetch FAQs on component mount
  useEffect(() => {
    axios.get('http://localhost:3000/faqs')
      .then(response => setFaqs(response.data))
      .catch(error => console.error(error));
  }, []);

  // Create new FAQ
  const handleCreateFaq = () => {
    if (newFaq.question && newFaq.answer) {
      axios.post('http://localhost:3000/faqs', newFaq)
        .then(response => setFaqs([...faqs, response.data]))
        .catch(error => console.error(error));
    }
  };

  // Delete FAQ by ID
  const handleDeleteFaq = (id) => {
    axios.delete(`http://localhost:3000/faqs/${id}`)
      .then(() => setFaqs(faqs.filter(faq => faq._id !== id)))
      .catch(error => console.error(error));
  };

  // Set FAQ for editing
  const handleEditFaq = (faq) => {
    setEditFaqId(faq._id);
    setEditFaqData({ question: faq.question, answer: faq.answer });
  };

  // Update FAQ
  const handleUpdateFaq = () => {
    axios.put(`http://localhost:3000/faqs/${editFaqId}`, editFaqData)
      .then(response => {
        setFaqs(faqs.map(faq => faq._id === editFaqId ? response.data : faq));
        setEditFaqId(null); // Reset edit mode
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>FAQ List</h2>
      {faqs.map(faq => (
        <div key={faq._id} style={styles.faqItem}>
          {editFaqId === faq._id ? (
            <div style={styles.editFaq}>
              <input
                type="text"
                value={editFaqData.question}
                onChange={(e) => setEditFaqData({ ...editFaqData, question: e.target.value })}
                style={styles.input}
              />
              <input
                type="text"
                value={editFaqData.answer}
                onChange={(e) => setEditFaqData({ ...editFaqData, answer: e.target.value })}
                style={styles.input}
              />
              <button style={{ ...styles.button, ...styles.updateButton }} onClick={handleUpdateFaq}>Update FAQ</button>
            </div>
          ) : (
            <div style={styles.faqDetails}>
              <h4 style={styles.question}>{faq.question}</h4>
              <p style={styles.answer}>{faq.answer}</p>
              <div style={styles.actions}>
                <button style={{ ...styles.button, ...styles.editButton }} onClick={() => handleEditFaq(faq)}>Edit</button>
                <button style={{ ...styles.button, ...styles.deleteButton }} onClick={() => handleDeleteFaq(faq._id)}>Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}

      <h2 style={styles.title}>Create a New FAQ</h2>
      <div style={styles.createFaq}>
        <input
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
          style={styles.input}
        />
        <button style={{ ...styles.button, ...styles.addButton }} onClick={handleCreateFaq}>Add FAQ</button>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
    container: {
      maxWidth: '900px',
      margin: '40px auto',
      padding: '30px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#E6F7FF', // Light blue background
      borderRadius: '10px',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.06)',
      backgroundImage: 'linear-gradient(to bottom, #E6F7FF, #FFFFFF)', // Smooth gradient from blue to white
    },
    title: {
      fontSize: '2.5rem',
      color: '#337ab7',
      marginBottom: '30px',
      textAlign: 'center',
      fontWeight: '600',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    faqItem: {
      backgroundColor: '#fff',
      padding: '20px',
      marginBottom: '20px',
      borderRadius: '10px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      ':hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12)',
      },
    },
    faqDetails: {
      display: 'flex',
      flexDirection: 'column',
    },
    question: {
      fontSize: '1.8rem',
      color: '#337ab7',
      marginBottom: '10px',
      fontWeight: '500',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    answer: {
      fontSize: '1.2rem',
      color: '#555',
      marginBottom: '15px',
      lineHeight: '1.6',
    },
    actions: {
      display: 'flex',
      gap: '12px',
    },
    button: {
      padding: '12px 18px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s, box-shadow 0.2s',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      ':hover': {
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
      },
    },
    editButton: {
      backgroundColor: '#8bc34a',
      color: '#fff',
      ':hover': {
        backgroundColor: '#689f38',
      },
    },
    deleteButton: {
      backgroundColor: '#e74c3c',
      color: '#fff',
      ':hover': {
        backgroundColor: '#c0392b',
      },
    },
    updateButton: {
      backgroundColor: '#2ecc71',
      color: '#fff',
      ':hover': {
        backgroundColor: '#1e8651',
      },
    },
    addButton: {
      backgroundColor: '#3498db',
      color: '#fff',
      ':hover': {
        backgroundColor: '#2e86c1',
      },
    },
    input: {
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '15px',
      fontSize: '1rem',
      width: '100%',
      boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.05)',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      ':focus': {
        borderColor: '#337ab7',
        boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
      },
    },
    createFaq: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    editFaq: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
  };
  

export default FaqPage;