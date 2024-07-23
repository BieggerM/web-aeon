<script>
    export let header;
    export let content;
    export let image;
    export let alt;
  </script>
  
  
  <div class="card hover:shadow-lg mx-2">
    <header class="card-header flex flex-col items-center p-4">
      <div class="h-14 w-14 overflow-hidden transform transition duration-300 ease-in-out hover:rotate-10">
        <img class="object-cover h-full w-full" src="{image}" alt="{alt}" />
      </div>
      <h3 class=" text-xl font-bold mt-4">{header}</h3>
      <p class=" text-base mt-2">{content} </p>
    </header>
  </div>
