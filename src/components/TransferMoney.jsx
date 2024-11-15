import React from 'react'
import MoneyTransferPic1 from '../assets/image/money transfer 1.svg'
import MoneyTransferPic2 from '../assets/image/money transfer 2.svg'
import PayingPic from '../assets/image/payment.svg'
import CashPic from '../assets/image/Cashback.svg'

const TransferMoney = () => {
    return (
        <section className="Fourth-background">
            <div className="container-4">
                <div className="money-transfer">
                    <h2>Make your money<br />transfer simle and clear</h2>
                    <ul className="li-buttons">
                        <li>Banking transactions are free for you</li>
                        <li>No monthly cash commission</li>
                        <li>Manage payments and transactions online</li>
                    </ul>
                    <a id="learn-more-buttons" href="#" className="learn-more-1">
                        <span>Learn more</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div>
                    <img src={MoneyTransferPic1} alt="" />
                </div>
                <div className="money-transfer-pic-2"><img src={MoneyTransferPic2} alt="" />
                </div>
                <div className="money-receive">
                    <h2 className="recieve-header">Receive payment from<br />international bank details</h2>
                    <div className="manage-elementur-container">
                        <div className="manage-pay">
                            <img className="paying-pic" img src={PayingPic} alt="" />
                            <p className="manage">Manage your payments online.<br />
                                Mollis congue egeestas egeestas<br />
                                fermentum fames</p>
                            <a id="learn-more-buttons" href="#" className="learn-more-2">
                                <span>Learn more</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="elementur-cash">
                            <img className="cash-pic" img src={CashPic} alt="" />
                            <p className="elementur">A elementur and imperdiet enim,<br />pretium tiam facilisi aenean<br />quam mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransferMoney