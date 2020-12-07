import React from 'react';
// changed the class componenet to the functional component because this does not have a state 
const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      {  <img style={styles.appleIcon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXkAAACGCAMAAAAPbgp3AAAAflBMVEX///8AAADz8/P8/PyEhIRPT09DQ0PPz8/a2tqYmJgdHR1+fn74+Ph2dnagoKDt7e2IiIiSkpKqqqo3Nzfi4uLv7+8xMTEnJyfb29vn5+dubm5VVVUWFhbR0dHGxsYlJSVHR0diYmK7u7u0tLQMDAxnZ2elpaVaWlo0NDQ9PT06/iZ+AAAPSUlEQVR4nO1da5eiMAxV8D0ooqjgA8Xn+P//4I47koQ2rcC06lHvpz07gOU2TfNqqNXMwPWT7mJWHxl63AcF4SbBpn5B99EjeS94u1OvXv8wf294ybgOGDx6NG+E8GuPxH/0/P2QTOsUyaPH8y7wgnoe4aNH9CZwGwLxe+/RQ3oPOF8C8fXTo4f0JhBVzceovBO2EvGfDfYuWM0k4hf+owf1DnAOssh/lM09cJSJ73UePah3QCwTX/969KDeAkOG+ejRg3oHdKYy8cNHD+od4MqmfL0ZP3pU7wC/JTO/ffSg3gKME9V49JjeA7Itf3AePab3QE8kvvkJD98FHZH4zWd3vQ92AvH9T7zmThBsyuCj4++FXEak9TEn74c58r4ffvbW+8FF5udt99GjeSv0f8V9E3zk/c4YjFuLfnf74f3u8CYTh6nv+CgeM3D9qL3dHQfHXRL5elKdsD0appvxuHWaD0dJZ3KnIT4SSXDFyHCNUbhrnMZZxeT01NiqvdTOYN6itZX1aTrcvryJD5b1xuSrTrantRggmB0SRpTdeNCUgjiX3ffc6Ly28oHyuqY55sMBk3D6L8vBKv8r/ra/5C+94LD9C/euB/jb61iCeebdwUZN5uwwQsGPgsVefelF8L+qZ2b9xhzwlE6ycebbTS2Z9fo6HXV8x+90m3ra/6M3qCr2NPeSPuOmYZh5r8spbQnTlkIfyfiqGD+moaHlMxY1mGVeLg7+OxaV/C0vt8MfDbybaRhlPtJo+OqoVHmWT/S2/v5uxmGS+ZApKDCB1qr8WPr5RzyhujHIfLSwQ/zP2EqnrGJBCJ7wyKE55qPCm2Z5nMqa5DvBbjo9XzzCGPPOyR7xpWU2O3+1n11nYFZBYVmGKeZdrkLVGMpq+vB6tnk2zE5HPJ+6McW8uLxNYt8oO7Ysw76JMr/OYHDEEAwxPznbI75ePoyajWaONs7THYowxLxFXbMsH3WJYM7wZErwl9ezATPMh/JhM1Po7coPZ5DdHNVW2T83f3g9KzDDPFMNbwoVWlB46fXeqVdzszjS8tnUjRHmLZryVZREO1uBl3NX8788ySaMMN+1Rny/SlYDlM1lh4ASztaTVTqYYN61JvLjKvEWJ73ePb0omBCSXk+WHzHBPHMAxBAqHcaHEvH55ZUcUDfzCs9yK+cj3Vu3lmBe+ai+SJgpHCq8MdF9v34r6J5ludhN3N4NgmAYDHbtkgE7L0pG3Z87u8dtpNaWhZh3w+RnFMPLKJJQ4l+MCxrDulqwJRvO/vd22G+V6iYe/OKIDE92hzPkVmab+VbBYHK9dYesRN3Fd6bh9t+LQGVTFWA+PJ7OkOPrndORIAJbTfnAnzCstNRFCx5sTOUSSrILMuUWiQ2PftgfsIKf5eC+rzPjJXKovJmw03aL+cmWyWj3c6UwtiybXltPsQIwnMyMBHUzVVg37Ux0fpl3umNpLD9YcEsm892nv+x1+lz4ii+huMF8krKkTIcoAVzPDiM4VRL5CUSrM10VwhMV7vBqSf8eqsLd+4Ysu5kLub6w546k8q4rZsysaZl3AmUlwQbUV8xKiAFUswKTbMgL4Amyw31+XXeyWy7+8k4TCEmlRZMtsOWPJDqyjkIMpFnTMR/q0nswjR1L8eFZtdIwUDbYKwfUzTevbsJMVI+3Ni0ptQWPjoUjSCL2kgutYf5GXnV9VcPiOT9T6Fci3skEfI27RAeUAB8EirO/d2sJ6ovlbHz+ngkTIdZMQSg0pLGr3vR8nq4FiRR/W808LeGYHo5JJ1ptA1qoenUwbUXLqnVrBcuGcITOFN8aMM4UzBAM5OVpkIQTx4+S7inH4DC/EkfZ/0eQGpr2R6vYceLVrpEzt3uCW6hk3kGbZnzEVboaoh48/F97lvyofbVmcpAooI25sH0UaxpOsuhHI1MYJ1L27Ce0imif331gwe+y3S7owNy4Ya5vlVBBoWQecx39nC/gksZv/8XyVh1lRXxXKpHxYLunt2MzHbbYzMn+fF3QU2G5eQOy6/Zyqh4CJ9dbF4LzF5JTkELLKhXzqL2lVR+D/t9fZtGSabOpFFpMsjWfqypz0+ypKWepOt+5X2bS7bTNYG6rFEJWX9Kacqgyzj1YwTwovD2TtO9A0vUyCkvpqGoNFOE986YErPop58t7OeFhiwkTNK/HVCQSemf9izv7Raj/ovOuYD7QPYzEvH+MKUuxg7RKbZIPyzFPH7ar4/Ztj6bvp7znPMJ9lu4gOebnrB2M+3u+6odnfpL975mXPNhzds/FfBvcKGHXghnhUi055hUmlYf8LcjIKPPsevpBhPYgnTSeeXAQFOMAof95EUuOVCXmGTfqF6BuZsz24RLmm6qQRYTXEKuLMq8spsLAFj2MxjIPi7alCGDCBd+xLeYXFU4sgMKeiptkpLNuXGJ3q6N0xNjD/2zjnWdlmMlpcY9nmd9mbCq9GZLqtKRtqtg24EbNRRZQ2Tbl2wjzJ3WWYgVKY43/SZjX1A8CW3Tj55iHGsmz0qZOMr4bcmMsM1BpTR1ALOWgJPo08loizGsOl5CdEmlB5nXjXcGKI/POMQ+ro69cQGH2rJYtq7KCD4urWt5GIximLJvIvLbkGCIFRBUg87oOeB4E0tc47xzzsGjVEuBl1s3elidVIW4DCzFl/ghR94M0Lci81olYwerGZrLIvLacB/bYPSp6jnmYXE1SCF7EVvSgfKwSC8m5yD68lLT7Eua1v4lL6gC6AJnXFiGiCYTyxDGfKbSe76pQS7P7aH8mo5iWjc/HmQycObMoBktAUjfIvL4ODd4ZLXpgfqlNXcZgAKK5yzGfaZJlQw0IddgrIy6r6EGwpvM+A9AVqTilyLz+ywPAFfZ4BOZ72joJF3YZVFQM816pPZNsPIbBaWsdCp/FFa2QosyDcYg2X0HmoRKFhG4Y5uNSFroQNDKIWTm70lOlnyWI/BZlHjz3bxhZUeaZ6AXDfLnEai2yZNCX/epI+/YDr9gIdxZlHkLCuEkXZT7NrpvrmC/+ChfUfCsHvy8o50yVyI0JLJVmvrzMp9l1Wpkvpz6ob2caZRqjl6kxFAgurW3GpZkHI7yv0/Mlmbd5YKSE0JepMRSKN4oyD7bEGWJKRZkHp0e7wyb4A53bsHogs/ixew8sm3Hji0cDgsFCGUBR5gN5WEWZByMcPQaGeQgeFOyQwXwLzRiCohV+qGzUMUOMmuUZLso87CQneU/UM+/05NExzIdQOVLstblvhpjCngsEcICFulRTgMmNZs6ZKso8KOu5HD3Qt4LhSjsZ5ifZBPUKrnV7W2xdskNUQHlUDxrrufMbSMHowWQsX1YwegBW0R5fh2HehV8o+NbMd+jMoVjLAzh8qSVPoW6Qee1H3DBWiYILzOsXJ+wQa5QLLm4Dq6pgoBbXkg3MisRvQNloi+4xQ7GhihSZ17aaw8wSpsvQ99E17IIzc7cyI1jyUXB/s9n04EecdreHgQ1PdRFOzFDklAMyr07C0XMCbDZQxxXaIDeygSBARY+QWu2wcomZ3goYx+BH67+Ah2JL1Q0yr9MZWJFMDhki87pv1ODPkvXLMQ9VzfpwP/l9iy1W/mPMHzUCQMr+hu+FFU80+0TysHLCCoChUEIfibSoVbMPSo7WcrAZ8C/mP3XwrXUwy7Dv6zZaF96idWN1gC9J1Q2t+lBuKriZbcik0aoPJVek9ICoJH3VR9E91rK6uWDaUJc++Yy9xwOtG3IlZX5x+9Av/Q0aXVS5cFAtQE9TKJhHtak43yKibS1SjNB8ShPM5ZvHCbEdDEk2UuZVR0FRbnMdASjzS369TFK4okBFK4rGqVCpl2crDU6gEWdw5W4WIJPySJykHPNL1o/dYoQkt4fnIuqs64GasFAVtyMeDLmFQd02xMMuBBOmHEMFzF3itW4+/MFIfYKB0GVucvO5DMb1cEjaIF/ZoKjiJsnVU5FQrW9d3SgVMImb72+fXY5gSziDSAnM11Px4AfN8ObNPTGLFAgqIiHKoJX/m4J5j2Z4hqzGcVY7couFVtB5qH1EF8b6fbtQBD9lhWpZZL4+DYgu90c06SacJ5Dyd80d0REdep5Y7MemOq2T6zHc7IoazFsN5mvaoMr2HrtUa/AIXOgiOSw8hgRahfiw2VusT6NVPJnEnd0817xH3EgwYgbTM/7aRv5kErYHixwn4v6hPKG2ynlHvcVw2/kZysSPo2QXXFtQkJXnWQ1YajU4clmkUYIDV4PXSWKVufxaT5ImyakH5mdb6tPse1KGTArGqc/DJnKnpmUv/0T6NHvthS7QNFxBZXMuZAyk8NBM3SDzA32P3400CozPR/rCAbnZqeYMOEO9gFzSyqofq4lH4Vd+iyWwcIlktgbNjEw01KeyxqOZkUSdm+PO+en6HsQ3mzzTodgUel3eAfxnhScjIoRtYenJzNf8QBGEWneZ8EAuJ9VWCV+TC8Tpe30cb4g9fVfHWt3Nz8amYRJ+tmBklZhtbYZ5VUZ/lnArKp8NnPCb3Zy1DW/0t1lpdUiae+TWnnmjEXmMkxatzkF1c92nxDysH4gJh+VJ0RtZzMOu5mKN4bcq1nezm1an3+IYXZ4PYlct15pNLx17IghHGYoe1/d32R1XMZYz4OGoj6t9nXYTVRxSyoC77W5KTi33R0o/dHW8jkL9vbI4CQ5nsgKX41NjsJU7yVnLCq6rtdUqDK72wItXu+6wMeyO2qEmVM7VHjhhMgoajeFgu4r//Pk2x+8ku+Oge/nuZTuMHcUsWYrelKtsLY+iVR8MClZ9WMfEimU5tf2NkBdgnjZmMIcKbdDL4RWYt9FBsWgBRHW8BPOe8QIQXSGGIbwE8+bLW+/QQfs1mDdd6qettzOEF2HeM9qyVZP2NocXYb42+eZJrAJFgyXDeBXmddHSsqjWs7IsXoZ5c66sLl5jEK/DvKmSM13jEpN4IebNHNSs1rGyAl6I+Vqc/p34892+QvRKzJNTEgzW52Z6OKSLlm4rTu9hT/7ipZhX53CXh2M78h3Pc/xwNTqozg/fTdXUXo35Wsz1IdgvRvlkgReONlza83A/iX855n+MS7HDWavBOkZJQ8yzj0f3MSeveDnma53chzeaRyaBeL1wQFMqM+UnmCzBLXzwQQKeynwq5mu1aHCarnu92TntRloxdqPjfHOeTsfN/u5OVjzBoDH8D35N6hAPrwgqtQ63Cr/TXulyyAjXiePJXdXMBx988MEHHzwv/gEzOer8yr/W6QAAAABJRU5ErkJggg==" alt="apple-logo"></img>}
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/2121/2121815.svg" alt="cart-icon" />
        {/* now we are changing the hard coded count by this props.count */}
       <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  appleIcon :{
    height:60,
    marginRight:20
  },
  nav: {
    height: 70,
    background: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default Navbar;