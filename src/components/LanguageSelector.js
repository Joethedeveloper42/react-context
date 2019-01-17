import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
    static contextType = LanguageContext;
    render() {
        console.log(this.context);
        return(
            <div>
            Select a language:
              <i
              className="flag uk"
              onClick={() => this.context.onLanguageChange('English')}
            />
            <i
              className="flag pl"
              onClick={() => this.context.onLanguageChange('Polish')}
            />
          </div>
        );
    }
}

export default LanguageSelector