const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
        <div>
      <img src="/images/smiley-face.jpg" alt="smiley face" />
      <div>
      Photo by <a href="https://unsplash.com/@zayyerrn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ahmed Zayan</a> on <a href="https://unsplash.com/s/photos/smiley-face?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
