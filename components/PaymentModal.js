import { useState } from 'react'
import { useRouter } from 'next/router'

export default function PaymentModal({ isOpen, onClose }) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (formData.customerName && formData.customerEmail && formData.customerPhone) {
            // Store customer info in localStorage
            localStorage.setItem('customerEmail', formData.customerEmail)
            
            // Redirect to success page
            router.push('/successful-payment')
        } else {
            alert('Please fill in all fields.')
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (!isOpen) return null

    return (
        <div className="payment-modal show">
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className="modal-content">
                <div className="modal-header">
                    <h3 data-key="payment-title">Mulai Berlangganan</h3>
                    <button className="modal-close" onClick={onClose}>
                        <i data-feather="x"></i>
                    </button>
                </div>
                
                <div className="modal-body">
                    <div className="package-summary">
                        <h4 data-key="package-summary-title">Paket AI Complete</h4>
                        <div className="price-display">
                            <span className="price">Rp 350.000</span>
                            <span className="period" data-key="package-period">/bulan</span>
                        </div>
                    </div>
                    
                    <form className="payment-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="customerName" data-key="form-name">Nama Lengkap</label>
                            <input 
                                type="text" 
                                id="customerName" 
                                name="customerName" 
                                value={formData.customerName}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="customerEmail" data-key="form-email">Email</label>
                            <input 
                                type="email" 
                                id="customerEmail" 
                                name="customerEmail" 
                                value={formData.customerEmail}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="customerPhone" data-key="form-phone">Nomor Telepon</label>
                            <input 
                                type="tel" 
                                id="customerPhone" 
                                name="customerPhone" 
                                value={formData.customerPhone}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <button type="submit" className="payment-btn" data-key="payment-btn">Pembayaran</button>
                    </form>
                </div>
            </div>
        </div>
    )
}