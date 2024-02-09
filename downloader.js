async function downloadImages(parent){
  let images = parent.getElementsByTagName("img");
  for (let i=0;i<images.length;i++){
    await download(i,images[i].src);
    await sleep(200);
  }
}

async function download(i,src){
  const blob = await (await fetch(src)).blob();
  const imageURL = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = imageURL;
  link.download = i+'.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function sleep(time){
  return new Promise(function(resolve){
    setTimeout(resolve, time);
  });
}