import TagFile from "../TagsFile.json";

export const readTagFile=() =>{
    let item = {};
    TagFile.Childs.map(async (station, key) => {
      await station.Childs.map(async (channel, key) => {
        await channel.Childs.map(async (device, key) => {
          await device.Childs.map(async (tag, key) => {
            let splitStr = tag.Path.split("/");
            let itemKey = (splitStr[2].trim() + "_" + splitStr[3]).trim();
            let itemPath = tag.Path;
            
            //  item[itemKey] = itemPath; //tạo mảng tags
            item[itemKey] = itemPath; //tạo mảng tags
            //  console.log(item);
            //  tagsConstant.push(item);
  
           //  tagsConstant[itemKey] = itemPath;
            await  Object.assign(item,item); //tạo object
            // console.log(item);
           
            //   let item = {
            //     itemKey:itemPath
            //   }
            //   console.log();
  
          ;
          });
        });
      });
    });
  return item;
  // window.console.clear();
  }