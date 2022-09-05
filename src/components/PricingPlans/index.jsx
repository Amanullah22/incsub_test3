import * as React from 'react';
import { style } from './styles';
import { StyleRoot } from 'radium';

const PricingPlans = () => {
    const [pricingPlans, setPricingPlans] = React.useState([
        {
            id: 1,
            planName: '',
            billingType: 'recurring',
            price: 0.00,
            billDuration: 1,
            billEvery: 'monthly',
            billingCycles: 1,
            show: false,
            menu: false
        }
    ])

    const [update, setUpdate] = React.useState(false)

    const changePlanName = (name, plan) => {
        const changedPlanIndex = pricingPlans.findIndex((element) => {
            return plan.id === element.id
        })

        const updatedPlans = pricingPlans

        const updatedPlan = { ...plan, planName: name }
        updatedPlans.splice(changedPlanIndex, 1, updatedPlan)

        setPricingPlans(updatedPlans)
        setUpdate(true)

        setTimeout(() => {
            setUpdate(false)
        }, 10)
    }

    const changePlanPrice = (price, plan) => {
        const changedPlanIndex = pricingPlans.findIndex((element) => {
            return plan.id === element.id
        })

        const updatedPlans = pricingPlans

        const updatedPlan = { ...plan, price: price }
        updatedPlans.splice(changedPlanIndex, 1, updatedPlan)

        setPricingPlans(updatedPlans)
        setUpdate(true)

        setTimeout(() => {
            setUpdate(false)
        }, 10)
    }

    const changeBillingDuration = (duration, plan) => {
        const changedPlanIndex = pricingPlans.findIndex((element) => {
            return plan.id === element.id
        })

        const updatedPlans = pricingPlans

        const updatedPlan = { ...plan, billDuration: duration }
        updatedPlans.splice(changedPlanIndex, 1, updatedPlan)

        setPricingPlans(updatedPlans)
        setUpdate(true)

        setTimeout(() => {
            setUpdate(false)
        }, 10)
    }

    const changeBillEvery = (every, plan) => {
        const changedPlanIndex = pricingPlans.findIndex((element) => {
            return plan.id === element.id
        })

        const updatedPlans = pricingPlans

        const updatedPlan = { ...plan, billEvery: every }
        updatedPlans.splice(changedPlanIndex, 1, updatedPlan)

        setPricingPlans(updatedPlans)
        setUpdate(true)

        setTimeout(() => {
            setUpdate(false)
        }, 10)
    }

    const changeBillingCycle = (cycle, plan) => {
        const changedPlanIndex = pricingPlans.findIndex((element) => {
            return plan.id === element.id
        })

        const updatedPlans = pricingPlans

        const updatedPlan = { ...plan, billingCycles: cycle }
        updatedPlans.splice(changedPlanIndex, 1, updatedPlan)

        setPricingPlans(updatedPlans)
        setUpdate(true)

        setTimeout(() => {
            setUpdate(false)
        }, 10)
    }

    const changeBillingType = (type, plan) => {
        const changedPlanIndex = pricingPlans.findIndex((element) => {
            return plan.id === element.id
        })

        const updatedPlans = pricingPlans

        const updatedPlan = { ...plan, billingType: type }
        updatedPlans.splice(changedPlanIndex, 1, updatedPlan)

        setPricingPlans(updatedPlans)
        setUpdate(true)

        setTimeout(() => {
            setUpdate(false)
        }, 10)
    }

    const addPlan = () => {
        const existingPlans = pricingPlans

        existingPlans.push({
            id: existingPlans.length + 1,
            planName: '',
            billingType: 'recurring',
            price: 0.00,
            billDuration: 1,
            billEvery: 'monthly',
            billingCycles: 1,
            show: true,
            menu: false
        })

        setPricingPlans(existingPlans)
        setUpdate(true)

        setTimeout(() => {
            setUpdate(false)
        }, 10)
    }

    const togglePlan = (plan) => {
        const changedPlanIndex = pricingPlans.findIndex((element) => {
            return plan.id === element.id
        })

        const updatedPlans = pricingPlans

        const updatedPlan = { ...plan, show: !plan.show }
        updatedPlans.splice(changedPlanIndex, 1, updatedPlan)

        setPricingPlans(updatedPlans)
        setUpdate(true)

        setTimeout(() => {
            setUpdate(false)
        }, 10)
    }

    const toggleMenu = (plan) => {
        const changedPlanIndex = pricingPlans.findIndex((element) => {
            return plan.id === element.id
        })

        const updatedPlans = pricingPlans

        const updatedPlan = { ...plan, menu: !plan.menu }
        updatedPlans.splice(changedPlanIndex, 1, updatedPlan)

        setPricingPlans(updatedPlans)
        setUpdate(true)

        setTimeout(() => {
            setUpdate(false)
        }, 10)
    }

    return <div>
        {pricingPlans.map((plan, index) => {
            return <StyleRoot>
                <div>
                    {pricingPlans.length > 1 && 
                    <div>
                        <hr />
                        <div style={{ width: '100%', display: 'flex', padding: '20px 0px' }}>
                        <div style={{ width: '50%' }}>
                            <b>{plan.planName}</b>
                        </div>
                        <div style={{ width: '20%' }}>
                            <b>Active</b>
                        </div>
                        <div style={{ width: '10%' }}>
                            <b>${plan.price}</b>
                        </div>
                        <div style={{ width: '20%', textAlign: 'center', position: 'relative' }}>
                            {plan.show === false && plan.menu === true && <div style={style.contextMenu}>
                                <p>Duplicate Plan</p>
                                <p style={{ color: 'red' }}>Archive Plan</p>
                            </div>}
                            <span style={{ cursor: 'pointer', visibility: plan.show === false ? 'visible' : 'hidden' }} onClick={() => toggleMenu(plan)}>⋯</span>&nbsp;&nbsp;&nbsp;{plan.show === false ? <span onClick={() => togglePlan(plan)} style={{ cursor: 'pointer' }}>v</span> : <span onClick={() => togglePlan(plan)} style={{ cursor: 'pointer' }}>^</span>}
                        </div>
                    </div>
                    </div>}
                    {plan.show === true || pricingPlans.length === 1 ? <div style={style.mainComponent}>
                        <div style={style.parallelMain}>
                            <div style={style.parallelChild}>
                                <h4 style={{ color: 'grey' }}>Plan Name</h4>
                                <input value={plan.planName} onChange={(e) => changePlanName(e.target.value, plan)} type='text' style={style.inputField} placeholder='E.g. Monthly, Lifetime etc'></input>
                            </div>

                            <div style={style.parallelChild}>
                                <h4 style={{ color: 'grey', display: 'inline-block' }}>Billing Type</h4>

                                <div style={style.billingTabs}>
                                    <div style={style.billingChildTab}>
                                        <div onClick={() => changeBillingType('recurring', plan)} style={{ color: plan.billingType === 'recurring' ? '#2980B9' : 'black', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderLeft: plan.billingType === 'recurring' ? '1px solid #D6EAF8' : 'none', padding: 14, background: plan.billingType === 'recurring' ? '#D6EAF8' : 'none' }}>
                                            Recurring
                                        </div>
                                    </div>
                                    <div style={style.billingChildTab}>
                                        <div onClick={() => changeBillingType('one-time', plan)} style={{ color: plan.billingType === 'one-time' ? '#2980B9' : 'black', borderTopRightRadius: '5px', borderBottomRightRadius: '5px', borderRight: plan.billingType === 'one-time' ? '1px solid #D6EAF8' : 'none', padding: 14, background: plan.billingType === 'one-time' ? '#D6EAF8' : 'none' }}>
                                            One time
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={style.parallelMain}>
                            <div style={style.parallelChild}>
                                <h4 style={{ color: 'grey' }}>Price</h4>
                                <div style={style.priceDiv}>
                                    <input value={plan.price} onChange={(e) => changePlanPrice(e.target.value, plan)} type='number' style={style.inputFieldNoBorder} placeholder='0.00'></input>
                                    <p style={style.usd}>USD</p>
                                </div>
                            </div>

                            <div style={style.parallelChild}>
                                {plan.billingType === 'recurring' &&
                                    <>
                                        <h4 style={{ color: 'grey' }}>Bill Every</h4>

                                        <input value={plan.billDuration} onChange={(e) => changeBillingDuration(e.target.value, plan)} type='number' min={0} style={style.inputNumber}></input>
                                        &nbsp;&nbsp;<select style={style.inputNumber} value={plan.billEvery} onChange={(e) => changeBillEvery(e.target.value, plan)}>
                                            <option value={'monthly'}>Monthly</option>
                                            <option value={'yearly'}>Yearly</option>
                                        </select>
                                    </>
                                }
                            </div>
                        </div>

                        <div style={style.parallelMain}>
                            <div style={style.parallelChild}>
                                <h4 style={{ color: 'grey', display: 'inline-block' }}>No. of Billing Cycles</h4>&nbsp;<p style={{ display: 'inline-block', fontSize: '14px', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>(Optional)</p>

                                <br />
                                <input placeholder={'E.g. 6, 12 etc'} value={plan.billingCycles} onChange={(e) => changeBillingCycle(e.target.value, plan)} type='number' min={0} style={style.inputField}></input>
                                <p style={{ fontSize: '14px', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>Leave this empty to auto-renew this plan until cancelled.</p>
                            </div>
                        </div>

                        {pricingPlans.length - index === 1 && <button onClick={addPlan} style={style.addButton}>+ Add Another Plan</button>}
                    </div> : ''}
                </div>
            </StyleRoot>
        })}
    </div>
}

export default PricingPlans