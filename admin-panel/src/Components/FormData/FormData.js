import React, { Component } from "react";
import "./FormData.css";

import axios from "axios";

import Sidebar from "../Sidebar/Sidebar";

class FormData extends Component{
  state = {
    items: null,
    selectedType: "today"
  }

  OnTypeSelectionChange = (type,e) => {
    axios.post('http://localhost:8080/admin/getformdata', {
      type: type
    }).then( (result) => {
      this.setState({
        items: result.data,
        selectedType: type
      });
      console.log(result.data);
    }).catch( (error) => {
      alert("Error!");
    });
  }

  render(){
    return(
      <div className="row wrap">
        <Sidebar></Sidebar>
        
        <div className="col-md-8">
        
        <div className="FormData">
          <div className="row FormDataStatusContainer">
            <button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">
              Открытые заказы
            </button>
            <button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">
              Отмененные заказы
            </button>
            <button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">
              Выполненные заказы
            </button>
          </div>
          <div className="row FormDataContentPart">

            <div className="col-md-12 FormDataContentPart__FormDataBock">
              <div className="FormDataBock__tape bg-danger"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
            <div className="FormDataBock__tape bg-warning"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
            <div className="FormDataBock__tape bg-success"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
            <div className="FormDataBock__tape bg-danger"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
            <div className="FormDataBock__tape bg-danger"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
            <div className="FormDataBock__tape bg-danger"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
              <div className="FormDataBock__tape bg-danger"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
            <div className="FormDataBock__tape bg-danger"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
            <div className="FormDataBock__tape bg-danger"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
            <div className="FormDataBock__tape bg-danger"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

            <div className="col-md-12 FormDataContentPart__FormDataBock">
            <div className="FormDataBock__tape bg-danger"></div>
              <h3>Андрей</h3>
              <p>+375296655275</p>
              <p>2119930@gmail.com</p>
              <p>Побыстрее пожалуйста хочу опарышей</p>
              <ul className="ChangeType">
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-red">Отменен</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-yellow">Открыт</button> </li>
                <li className="ChangeType__changer"><button className="FormDataStatusContainer__status FormDataStatusContainer__status-green">Завершен</button> </li>
              </ul>
            </div>

          </div>
          <div className="row FormDataPagesContainer">
          
          </div>
        </div>
      
         
        </div>

        <div className="col-md-2 Sidebar">

            <ul className="Sidebar__catContainer">
              <li className="catContainer__li"><button className="catContainer__button" onClick={this.OnTypeSelectionChange.bind(this,"today")}>Сегодня</button></li>
              <li className="catContainer__li"><button className="catContainer__button" onClick={this.OnTypeSelectionChange.bind(this,"week")}>Неделя</button></li>
              <li className="catContainer__li"><button className="catContainer__button" onClick={this.OnTypeSelectionChange.bind(this,"month")}>Месяц</button></li>
              <li className="catContainer__li"><button className="catContainer__button" onClick={this.OnTypeSelectionChange.bind(this,"all")}>Все заказы</button></li>
            </ul>

          </div>


      </div>
    );
  }
}

export default FormData;