window.onload = () => {
    const models = [
      {
        url: './assets/magnemite/scene.gltf',
        scale: '0.15 0.15 0.15',
        rotation: '0 180 0',
        name: 'Magnemite'
      },
      {
        url: './assets/articuno/scene.gltf',
        scale: '0.5 0.5 0.5',
        rotation: '0 90 0',
        name: 'Articuno'
      },
      {
        url: './assets/psyduck/scene.gltf',
        scale: '0.4 0.4 0.4',
        rotation: '0 180 0',
        name: 'Psyduck'
      }
    ];
  
    let modelIndex = 0;
    const modelNameEl = document.getElementById('model-name');
    const scene = document.querySelector('a-scene');
  
    const staticLoadPlaces = () => {
      return [
        {
          name: "Your Location",
          location: {
            lat: 49.896991,
            lng: -97.139462
          }
        }
      ];
    };
  
    const placeModel = (model, location) => {
      const entity = document.createElement('a-entity');
      entity.setAttribute('gps-entity-place', `latitude: ${location.lat}; longitude: ${location.lng};`);
      entity.setAttribute('gltf-model', model.url);
      entity.setAttribute('rotation', model.rotation);
      entity.setAttribute('scale', model.scale);
      entity.setAttribute('animation-mixer', '');
      scene.appendChild(entity);
  
      modelNameEl.innerText = `Model: ${model.name}`;
    };
  
    const places = staticLoadPlaces();
    placeModel(models[modelIndex], places[0].location);
  
    document.getElementById('change').addEventListener('click', () => {
      modelIndex = (modelIndex + 1) % models.length;
  
      // remove all existing models
      document.querySelectorAll('[gltf-model]').forEach(el => el.parentNode.removeChild(el));
  
      placeModel(models[modelIndex], places[0].location);
    });
  };
  