import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fetch-data",
  templateUrl: "./fetch-data.component.html",
})

export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public todos: Todo[];

  //, @Inject("BASE_URL") baseUrl: string

  constructor(http: HttpClient) {
    //http.get<WeatherForecast[]>(baseUrl + "weatherforecast").subscribe(
    //  (result) => {
    //    this.forecasts = result;
    //  },
    //  (error) => console.error(error)
    //);
    http.get<Todo[]>('https://localhost:5001/api/ToDoItems').subscribe(
      (result) => {
        console.log(result)
        this.todos = result;
      },
      (error) => console.error(error)
    );
  }

  ngOnInit() {
    console.log(this.todos);
  }
}

interface Todo {
  name: string;
  isComplete: boolean;
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
