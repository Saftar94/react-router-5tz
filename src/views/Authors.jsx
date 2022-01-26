function Authors() {
  const styleH1 = {
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#38b3b3',
    marginLeft: 100,
    marginRight: 100,
    height: 50,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <>
      <div>
        <h1 style={styleH1}>Авторы</h1>
        <img
          src="https://www.smartprix.com/bytes/wp-content/uploads/2021/12/1_hs85VwSPF_eJiCwOuvtthQ.jpeg"
          alt="google-foto"
          width={500}
          height={200}
        />
        <p>
          2022 is here, and we're expecting big things from the next 12 months
          of smartphones. We've already seen plenty to get excited about. The
          Samsung Galaxy S21 FE is already on sale, while the OnePlus 10 Pro and
          the Xiaomi 12 have both already launched in China ahead of a global
          release later this year. That's not even mentioning the new slate of
          foldables from Huawei, Honor, and Oppo. Plenty of these phones are
          powered by the Snapdragon 8 Gen 1 chipset, which will also power
          flagship launches like the Oppo Find X4 Pro and Samsung Galaxy S22.
          The Snapdragon will have competition from the MediaTek Dimensity 9000
          though, which for the first time has matched its rival on specs; how
          many big brands will make the jump away from Snapdragon for their
          biggest 2022 releases?
        </p>
      </div>
    </>
  )
}

export default Authors
