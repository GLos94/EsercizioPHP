@extends('layouts.main-layout')

@section('content')

<div class="container">

  {{-- trova lat e long inserendo città --}}
  <h2>Dalla città alle sue coordinate:</h2>
    <div class="searchbar">
      <input id="address-input" class="search_input" type="text" name="" placeholder="Inserisci città">
    </div>

    <div class="coordinate">
      <p id="lat">Latitudine: </p>
      <p id="long">Longitudine: </p>
    </div>



  {{-- trova città inserendo lat e long --}}
  <h2>Dalle coordinate alla città:</h2>
    <div class="città">
      <input id="latitudine" type="number" name="" value="" placeholder="Inserisci latitudine">
      <input id="longitudine" type="number" name="" value="" placeholder="Inserisci longitudine">
      <button id="bottone" class="btn btn-primary" type="button" name="button">Cerca</button>
    </div>

    <div class="city">
      <p id="city"></p>
    </div>


  <div id="map"></div>
    

</div>












@endsection
