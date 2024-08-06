<script>
    export let header;
    export let content;
    export let image;
    export let alt;
  </script>
  
  
  <div class="card hover:shadow-lg mx-2 card-hover">
    <header class="card-header flex flex-col items-center p-4">
      <div class="h-14 w-14">
        <img class="object-cover h-full w-auto" src="{image}" alt="{alt}" />
      </div>
      <h3 class="text-2xl font-bold mt-4">{header}</h3>
      <p class="text-xl mt-2">{content} </p>
    </header>
  </div>
