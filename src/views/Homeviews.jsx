function HomeViews() {
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
        <h1 style={styleH1}>Главная</h1>
        <p>
          Runtime type checking for React props and similar objects. You can use
          prop-types to document the intended types of properties passed to
          components. React (and potentially other libraries—see the
          checkPropTypes() reference below) will check props passed to your
          components against those definitions, and warn in development if they
          don’t match.
        </p>
      </div>
    </>
  )
}

export default HomeViews
