let handler = m => m

handler.all = async function (m) {
    if (!m.message) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                //global.db.data.users[m.sender].banned = true
                m.reply('*Do not Spam!! Otherwise you will kicked*')
        
                if (isowner) return m.reply('*Hey sorry you\'re owner , you won\'t be kicked. haha..*')
            } 
            this.spam[m.sender].count = 10
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 10,
        lastspam: 0
    }
}

module.exports = handler
